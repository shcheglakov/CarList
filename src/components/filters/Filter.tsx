import { useQuery } from "react-query";
import { useState } from "react";
import { CarList } from "../car-list/CarList";
import DropDownPanel from "./drop-down-panel/DropDownPanel";
import { carsService } from "../../services/cars.services";
import { ICars } from "../../pages/types";
import styles from "./Filter.module.scss"
export function Filter() {
  const { data } = useQuery({
    queryKey: ['cars list'],
    queryFn: () => carsService.getCars(),
  });

  const brands = Array.from(new Set(data?.map((car) => car.brand) || []));
  const models = Array.from(new Set(data?.map((car) => car.model) || []));
  const cities = Array.from(new Set(data?.map((car) => car.city) || []));

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  const handlePriceRangeSelect = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
  };

  const filteredData = data?.filter((car: ICars) => {
    if (selectedBrand && !car.brand.includes(selectedBrand)) return false;
    if (selectedModel && !car.model.includes(selectedModel)) return false;
    if (selectedCity && !car.city.includes(selectedCity)) return false;
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      if (car.price < min || car.price > max) return false;
    }
    return true;
  });

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr .6fr',
      padding: '1.5rem'
    }}>
      <CarList data={filteredData || []} />
      <div className={styles.dropdown_main_block}>
        <DropDownPanel title="Марка" options={brands} onSelect={handleBrandSelect} />
        <DropDownPanel title="Модель" options={models} onSelect={handleModelSelect} />
        <DropDownPanel title="Город" options={cities} onSelect={handleCitySelect} />
        <DropDownPanel
          title="Диапазон цены"
          options={['0-10000', '10000-20000', '20000-30000']}
          onSelect={handlePriceRangeSelect}
        />
      </div>
    </div>
  );
}