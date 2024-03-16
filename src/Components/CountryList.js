import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountryList } from "../redux/actions";
import { fetchCountryList } from "../API/CountrylistAPI";
import { Card, Row, Col } from "antd";
import "./CountryList.css";

const { Meta } = Card;

const CountryList = () => {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.todos.countryList);

  const loadData = async () => {
    try {
      const data = await fetchCountryList();
      dispatch(setCountryList(data));
    } catch (error) {
      console.error("Error fetching country list:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="country_list">
      <h1>Country List</h1>
      <Row gutter={16} justify="center">
        {countryList.map((country, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={6}
            style={{ height: "100%", marginBottom: "16px" }}
          >
            <Card
              className="card_custom"
              cover={
                <img
                  alt={country.name?.common}
                  src={country.flags.png || "N/A"}
                  style={{ height: "200px" }}
                />
              }
              style={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Meta
                title={country.name?.common || "N/A"}
                description={`Capital: ${
                  country.capital?.[0] || "N/A"
                }, Population: ${country.population || "N/A"}`}
              />
              <p>
                <strong>Car Signs:</strong>{" "}
                {country.car?.signs?.join(", ") || "N/A"}
              </p>
              <p>
                <strong>Car Side:</strong> {country.car?.side || "N/A"}
              </p>
              <p>
                <strong>CCA2:</strong> {country.cca2 || "N/A"}
              </p>
              <p>
                <strong>CCA3:</strong> {country.cca3 || "N/A"}
              </p>
              <p>
                <strong>CCN3:</strong> {country.ccn3 || "N/A"}
              </p>
              <p>
                <strong>Area:</strong> {country.area || "N/A"}
              </p>
              <p>
                <strong>Continent:</strong>{" "}
                {country.continents?.[0] || "N/A"}
              </p>
              <p>
                <strong>Timezone:</strong>{" "}
                {country.timezones?.[0] || "N/A"}
              </p>
              <p>
                <strong>Language:</strong>{" "}
                {Array.isArray(country.languages)
                  ? country.languages.join(", ")
                  : "N/A"}
              </p>
              <p>
                <strong>Currency:</strong>{" "}
                {country.currencies?.[0]?.name || "N/A"}
              </p>
              <p>
                <strong>Region:</strong> {country.region || "N/A"}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CountryList;
