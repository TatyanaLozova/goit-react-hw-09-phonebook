import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css'
import { filterContacts } from '../../redux/contacts/contacts-actions';


const Filter = ({ filterValue, onChangeFilter }) => {
  return (
    <label className={s.label}>
      Search for contacts by name
      <input  className={s.input}
        type="text"
        value={filterValue}
        onChange={onChangeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filterValue: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (ev) => dispatch(filterContacts(ev.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);