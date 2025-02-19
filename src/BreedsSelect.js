// DO NOT DELETE
// DO NOT DELETE
import * as React from 'react'

// this is comment for commit
export function BreedsSelect(props) {
  const breeds = props.breeds
  const handleChange = props.handleChange
  const selectedBreed = props.selectedBreed
  const showBreeds = props.showBreeds
  const breedsItems = Object.keys(breeds).map((breed, index) => (
    <option key={index} value={breed}>
      {breed}
    </option>
  ))
  const selectedUrls = props.selectedUrls
  const Breedimgs = [...selectedUrls].map((selectedUrl, index) => (
    // eslint-disable-next-line react/jsx-key
    <div className="flex-item">
      <div className="image-wrap">
        <img src={selectedUrl} key={index} className="photo"></img>
      </div>
    </div>
  ))

  return (
    <>
      <div className="dogForm">
        <label>
          Breeds List
          <select onChange={handleChange} value={selectedBreed}>
            <option hidden>Breeds List</option>
            {breedsItems}
          </select>
        </label>
        <button className="showBtn" onClick={showBreeds}>
          表示
        </button>
      </div>
      <div className="flex-container">{Breedimgs}</div>
    </>
  )
}
