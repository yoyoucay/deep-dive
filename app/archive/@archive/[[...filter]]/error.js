"use client";
 
export default function FilterError({error}) {
  return (
    <div id="error">
        <h2>Failed to load filtered news.</h2>
        <p>{error.message}</p>
    </div>
  );
}
