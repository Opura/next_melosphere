export default function Home() {
  return (
    <section className="text-center p-8">
      <h1>Bienvenue sur Melo-Sphere !</h1>
      <p>Votre plateforme de vente en ligne.</p>
      <p>Cliquez ici pour accéder à votre dashboard.</p>
      <a 
        href="/dashboard"
        className="bg-orange-300 text-neutral-900 hover:bg-orange-400 font-bold py-2 px-4 rounded"
      >
        Dashboard
      </a>
    </section>
  );
}
