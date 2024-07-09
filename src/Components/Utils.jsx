import React, { useState, useEffect, useRef } from 'react';
import '../styles/GeneralInfo.css';
import { FaEdit } from 'react-icons/fa';
import { MdEditSquare } from "react-icons/md";
import { useForm } from './useFormHook';

const Utils = ({toggleValues. }}) => {
  const [values, handleChange] = useForm({
    name: 'Your Name',
    introduction:
      'I am a [Current Position], currently working at [Current Company]. I help companies build products from zero to one. This is a brief description about you. Write some details about yourself, and make it meaningful. Maximum 3 lines of text.',
    link: 'your-porfolio.com',
    email: 'your@email.com',
    number: '080909999',
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    isPreviewMode && btnRef.current && btnRef.current.click();
  }, [isPreviewMode]);

  const saveOrEdit = e => {
    e.preventDefault();
    setIsEditMode(!isEditMode);
  };

  const displayInfo = () => {
    return isEditMode ? (
      <form onSubmit={saveOrEdit}>
        <input
          type="text"
          name="name"
          className="header__name"
          placeholder="Enter name"
          value={values.name}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="introduction"
          rows="4"
          placeholder="Enter your introduction here..."
          className="header__introduction--text"
          value={values.introduction}
          onChange={handleChange}
        ></textarea>
        <div className="header__contact-details">
          <input
            type="text"
            name="link"
            placeholder="Enter link"
            value={values.link}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="number"
            placeholder="Enter number"
            value={values.number}
            onChange={handleChange}
          />
        </div>
        <button
          ref={btnRef}
          type="submit"
          onClick={saveOrEdit}
          className="btn btn--save"
        >
          Save
        </button>
      </form>
    ) : (
      <div>
        <p className="header__name">{values.name}</p>
        <p className="header__introduction">{values.introduction}</p>
        <div className="header__contact-details">
          <p>{values.link}</p>
          <p>{values.email}</p>
          <p>{values.number}</p>
        </div>

        {isPreviewMode ? null : (
          <button
            className={`btn btn--edit ${isDarkMode ? 'darkMode' : ''}`}
            onClick={saveOrEdit}
          >
            <FaEdit />
            <MdEditSquare />

          </button>
        )}
      </div>
    );
  };

  return <div className="header__general-info">{displayInfo()}</div>;
};

export default Utils;