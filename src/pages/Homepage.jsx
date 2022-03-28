import React, { useEffect, useState } from 'react';
import SelectField from '../components/SelectField';
import MenuItem from '@mui/material/MenuItem';
import Buttons from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const [error, setError] = useState(null);
  const [list, setList] = useState([]);
  const [listCity, setListCity] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProvince, setProvince] = useState('');
  const [selectedCity, setCity] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi', requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setList(result.provinsi);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .catch((error) => {
        console.error('error fetching data', error);
      });
  }, []);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(
      'https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=' + selectedProvince,
      requestOptions
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setListCity(result.kota_kabupaten);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .catch((error) => {
        console.error('error fetching data', error);
      });
  }, [selectedProvince]);

  const handleChangeProvince = (event) => {
    setProvince(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <header>
          <p>Pilih Daerah</p>
          <div>
            <SelectField
              label={'Pilih Provinsi'}
              value={selectedProvince}
              onChange={handleChangeProvince}>
              {list.map((option) => (
                <MenuItem key={option?.id} value={option?.id}>
                  {option?.nama}
                </MenuItem>
              ))}
            </SelectField>
            <SelectField label={'Pilih Kota'} value={selectedCity} onChange={handleChangeCity}>
              {listCity.map((option) => (
                <MenuItem key={option?.id} value={option?.nama}>
                  {option?.nama}
                </MenuItem>
              ))}
            </SelectField>
          </div>
          <Buttons
            onClick={() => {
              navigate('/');
            }}
            variant="contained"
            text="back"
          />
        </header>
      </div>
    );
  }
}
