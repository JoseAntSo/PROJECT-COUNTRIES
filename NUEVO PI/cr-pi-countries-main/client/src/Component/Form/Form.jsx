import React from "react";
import styles from"./Form.module.css"
const Form = ({
  handleSubmit,
  input,
  handleChange,
  filteredCountries,
  handleCountrySelect,
  handleCountryRemove,
  errorMessage,
  success,
}) => {
  console.log(input)
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        {errorMessage.name && <span>{errorMessage.name}</span>}
        <label htmlFor="difficulty">Difficulty</label>
        <select
          name="difficulty"
          value={input.difficulty}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          name="duration"
          value={input.duration}
          onChange={handleChange}
        />
        <label htmlFor="season">Season</label>
        <select name="season" value={input.season} onChange={handleChange}>
          <option >Choose season</option>
          <option value="Verano">Summer</option>
          <option value="Otoño">Autumn</option>
          <option value="Invierno">Winter</option>
          <option value="Primavera">Spring</option>
        </select>
        <div>
        <label htmlFor="countries">Countries</label>
  <select onChange={(event) => handleCountrySelect(event.target.value)}>
    <option value="">Select a country</option>
    {filteredCountries.map((country) => (
      <option key={country.id} value={country.id}>
        {country.name}
      </option>
    ))}
  </select>
          <div>
            {input.countries.map((country, index) => (
              <span key={index}>
                {country}
                <button
                  type="button"
                  onClick={() => handleCountryRemove(index)}
                >
                  x
                </button>
              </span>
            ))}
          </div>
          {errorMessage.countries && (
            <span>{errorMessage.countries}</span>
          )}
        </div>
        {
          !success && (
            <button type="submit">Send</button>
          )}
        {errorMessage.other && !success && (
          <span>{errorMessage.other}</span>
        )}
        {errorMessage.other && (
          <button onClick={() => window.location.reload()}>Reload</button>
        )}
        {success && <span>Activity created successfully!</span>}
        {success && (
          <button onClick={() => window.location.reload()}>OK</button>
        )}
      </form>
    </div>
  );
};

export default Form;