import ConverterForm from './components/ConverterForm';

const App = () => {
  return (
    <div className='currency-converter'>
      <h2 className='converter-title'>FlipCash</h2>
      <p className='converter-description'>
        Fast and efficient currency conversion
      </p>
      <ConverterForm />
    </div>
  );
};

export default App;
