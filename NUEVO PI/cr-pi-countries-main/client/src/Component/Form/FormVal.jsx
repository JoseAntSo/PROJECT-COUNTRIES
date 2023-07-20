import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActivity } from "../../redux/actions";
import Form from "./Form";

const FormVal = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.AllCountries);
  const [input, setInput] = useState({
    name: "",
    difficulty: 1,
    duration: 1,
    season: "Summer",
    countries: [],
  });
  const [success, setSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    other: "",
    name: "",
    countries: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    if (event.target.name === "name") {
      if (!/^[a-zA-Z]{4,15}$/.test(value)) {
        setErrorMessage({
          ...errorMessage,
          name: "Please enter a valid name, it must be between 4 and 15 characters long and only contain letters ",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          name: "",
        });
      }
    }
    setInput({
      ...input,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(postActivity(input));
      setSuccess(true);
      setErrorMessage({
        ...errorMessage,
        other: "",
      });
    } catch (error) {
      setErrorMessage({
        ...errorMessage,
        other: `${error}`,
      });
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCountrySelect = (country) => {
    setInput({
      ...input,
      countries: [...input.countries, country],
    });
  };

  const handleCountryRemove = (index) => {
    const updatedCountries = [...input.countries];
    updatedCountries.splice(index, 1);
    setInput({
      ...input,
      countries: updatedCountries,
    });
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(input);

  return (
    <Form
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errorMessage={errorMessage}
      input={input}
      searchTerm={searchTerm}
      handleSearch={handleSearch}
      filteredCountries={filteredCountries}
      handleCountrySelect={handleCountrySelect} 
      handleCountryRemove={handleCountryRemove}
      success={success}
    />
  );
};

export default FormVal;