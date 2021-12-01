import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h1>This is the Page Component</h1>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
