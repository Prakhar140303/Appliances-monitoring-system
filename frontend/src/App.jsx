import { useEffect, useState } from 'react';
import { useApplianceStore } from './store/useApplianceStore';
import { Power, ToggleLeft, ToggleRight } from 'lucide-react';

function App() {
  const { allAppliaces, getAllAppliances, addAppliance } = useApplianceStore();

  const [name, setName] = useState('');
  const [powerRating, setPowerRating] = useState('');
  const [status, setStatus] = useState('off'); // default option

  useEffect(() => {
    getAllAppliances();
  }, [getAllAppliances]);

  const handleAddAppliance = (e) => {
    e.preventDefault();

    if (!name || !powerRating) return alert("Fill all fields");

    addAppliance({
      name,
      powerRating: Number(powerRating),
      status,
    });

    // Clear form
    setName('');
    setPowerRating('');
    setStatus('off');
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <Power className="text-primary" /> Appliances
      </h1>

      <div className="flex justify-center mb-6">
        <button onClick={getAllAppliances} className="btn btn-outline btn-primary">
          Refresh Appliances
        </button>
      </div>

      {/* Table with darker border */}
      <div className="overflow-x-auto mb-10">
        <table className="table table-zebra w-full border border-gray-500 rounded-lg">
          <thead className="bg-base-300 text-base-content">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Power (W)</th>
            </tr>
          </thead>
          <tbody>
            {allAppliaces.map((appliance, index) => (
              <tr key={appliance._id} className="border-b border-gray-500">
                <td>{index + 1}</td>
                <td className="font-medium">{appliance.name}</td>
                <td>
                  <span
                    className={`badge gap-2 ${
                      appliance.status === 'on' ? 'badge-success' : 'badge-error'
                    }`}
                  >
                    {appliance.status === 'on' ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
                    {appliance.status}
                  </span>
                </td>
                <td className="flex items-center gap-1">
                  {appliance.powerRating}
                  <Power size={16} className="text-primary" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form to add appliance */}
      <form onSubmit={handleAddAppliance} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Power Rating"
          className="input input-bordered w-full"
          value={powerRating}
          onChange={(e) => setPowerRating(e.target.value)}
        />

        <select
          className="select select-bordered w-full"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="on">On</option>
          <option value="off">Off</option>
        </select>

        <button type="submit" className="btn btn-primary w-full">
          Add Appliance
        </button>
      </form>
    </div>
  );
}

export default App;
