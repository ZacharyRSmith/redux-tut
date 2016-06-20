import React from 'react';
import { connect } from 'react-redux';

const Habit = ({ text }) => (
  <li>
    {text}
  </li>
);

const HabitList = ({ habits }) => {
  return ( habits.length
    ? <ul>
      {habits.map(h =>
        <Habit
          key={h.id}
          {...h}
        />
      )}
      </ul>
    : <ul></ul>
  );
};

const mapStateToProps = (state) => ({
  habits: state.habits
});

export default connect(
  mapStateToProps,
  null
)(HabitList);
