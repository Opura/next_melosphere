import Link from "next/link";

import { Button } from "@/app/modules/shared/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/modules/shared/components/ui/card";

export default function Dashboard() {
  return (
    <section className="p-8">
      <div>
        <h1 className="text-2xl">Tableau de bord</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 container mx-auto justify-items-center">
          <Link href="/products" className="rounded w-full">
            <Card className="relative w-full h-full flex flex-col items-center bg-neutral-800 text-neutral-100">
              <CardHeader className="w-full space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <CardTitle className="text-xl">Produits</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-center text-neutral-100">
                  Informations utiles sur les produits
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto w-full bg-neutral-800">
                <Button className="bg-orange-300 text-neutral-900 hover:bg-orange-400 font-bold py-2 px-4 rounded w-full cursor-pointer">
                  Voir en détails
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/brands" className="rounded w-full">
            <Card className="relative w-full h-full flex flex-col items-center bg-neutral-800 text-neutral-100">
              <CardHeader className="w-full space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <CardTitle className="text-xl">Marques</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-center text-neutral-100">
                  Informations utiles sur les marques
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto w-full bg-neutral-800">
                <Button className="bg-orange-300 text-neutral-900 hover:bg-orange-400 font-bold py-2 px-4 rounded w-full cursor-pointer">
                  Voir en détails
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/categories" className="rounded w-full">
            <Card className="relative w-full h-full flex flex-col items-center bg-neutral-800 text-neutral-100">
              <CardHeader className="w-full space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <CardTitle className="text-xl">Catégories</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-center text-neutral-100">
                  Informations utiles sur les catégories
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto w-full bg-neutral-800">
                <Button className="bg-orange-300 text-neutral-900 hover:bg-orange-400 font-bold py-2 px-4 rounded w-full cursor-pointer">
                  Voir en détails
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/tags" className="rounded w-full">
            <Card className="relative w-full h-full flex flex-col items-center bg-neutral-800 text-neutral-100">
              <CardHeader className="w-full space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <CardTitle className="text-xl">Tags</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-center text-neutral-100">
                  Informations utiles sur les tags
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto w-full bg-neutral-800">
                <Button className="bg-orange-300 text-neutral-900 hover:bg-orange-400 font-bold py-2 px-4 rounded w-full cursor-pointer">
                  Voir en détails
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>
    </section>
  );
}