import { Button } from 'antd';

function Settings() {
  const handleClick = () => {
    throw new Error('Generated error!!!!');
  };

  return (
    <div>
      <p className="text-xl text-lime-400">Settings</p>
      <Button
        className="border border-red-400 p-3 rounded text-sm mt-5"
        onClick={handleClick}
      >
        Click to break
      </Button>
    </div>
  );
}
export default Settings;
