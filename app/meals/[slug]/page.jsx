export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Specific Meal</h1>
      <p>{params.slug}</p>
    </main>
  );
}
