import { useState } from 'react';
import Button from './components/Button';
import InputField from './components/InputField';
import Card from './components/Card';
import Modal from './components/Modal';
import Alert from './components/Alert';
import wirelessHeadphones from './assets/wireless-headphones.jpg';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error' | 'info'>('info');

  const showAlert = (type: typeof alertType) => {
    setAlertType(type);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Modularis UI Library</h1>
        <p>Reusable Component Showcase</p>
      </header>

      <main className="component-showcase">
        {/* Button Section */}
        <section className="component-group">
          <h2>Buttons</h2>
          <div className="component-row">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button disabled>Disabled</Button>
            <Button iconLeft="⭐" iconRight="→">
              With Icons
            </Button>
          </div>
        </section>

        {/* Input Field Section */}
        <section className="component-group">
          <h2>Input Fields</h2>
          <div className="component-column">
            <InputField 
              label="Default Input" 
              placeholder="Type something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <InputField
              label="Required Field"
              isRequired
              placeholder="This is required"
            />
            <InputField
              label="Error State"
              status="error"
              errorMessage="This field is invalid"
            />
          </div>
        </section>

        {/* Card Section */}
        <section className="component-group">
          <h2>Cards</h2>
          <div className="card-row">
            <Card 
              title="Product Card" 
              subtitle="$29.99" 
              image={wirelessHeadphones}
            >
              <Button variant="primary" size="small">Add to Cart</Button>
            </Card>
            <Card title="Profile Card" subtitle="Frontend Developer">
              <p className="card-text">Skills: React, TypeScript</p>
              <div className="card-actions">
                <Button variant="secondary" size="small">Message</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Modal Trigger */}
        <section className="component-group">
          <Button 
            variant="primary" 
            size="large"
            onClick={() => setModalOpen(true)}
          >
            Open Modal
          </Button>
        </section>

        {/* Alert Triggers */}
        <section className="component-group">
          <h2>Alert Controls</h2>
          <div className="component-row">
            <Button variant="success" onClick={() => showAlert('success')}>
              Show Success
            </Button>
            <Button variant="danger" onClick={() => showAlert('error')}>
              Show Error
            </Button>
            <Button variant="secondary" onClick={() => showAlert('info')}>
              Show Info
            </Button>
          </div>
        </section>
      </main>

      {/* Modal */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Example Modal"
      >
        <p>This is a reusable modal component!</p>
        <InputField label="Modal Input" placeholder="Works in modals too" />
        <div className="modal-actions">
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>

      {/* Alert */}
      {alertVisible && (
        <div className="alert-container">
          <Alert 
            type={alertType} 
            message={
              alertType === 'success' ? 'Operation successful!' :
              alertType === 'error' ? 'Something went wrong!' :
              `Here's some information`
            } 
            onClose={() => setAlertVisible(false)}
          />
        </div>
      )}
    </div>
  );
}

export default App;