"use client";

import { useEffect, useState } from "react";
import { getBrands } from "../services/brands.services";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await getBrands();
        console.log("Brands data:", data);
        setBrands(data);
      } catch (err) {
        setError("Erreur lors du chargement des marques");
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {brands.map((brand: any) => (
        <li key={brand.id}>{brand.name}</li>
      ))}
    </ul>
  );
};

export default Brands;