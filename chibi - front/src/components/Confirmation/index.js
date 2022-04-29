import { useEffect } from 'react';
import TrackOrder from '../TrackOrder';
import './confirmation.scss';

export default function Confirmation() {
  const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
  const user = JSON.parse(localStorage.getItem("user"));
    
  return (
    <div className="confirmation">
      <TrackOrder user={user} order={lastOrder} />
    </div>
  );
};