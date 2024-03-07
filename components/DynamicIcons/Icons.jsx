import React from 'react';
import { FiTruck } from 'react-icons/fi';
import { LuCable } from 'react-icons/lu';
import { MdSecurity } from 'react-icons/md';
import { RiWirelessChargingLine } from 'react-icons/ri';

const iconComponents = {
  Truck: FiTruck,
  Cable: LuCable,
  Security: MdSecurity,
  Wireless: RiWirelessChargingLine,
};

const Icons = ({ name }) => {
  const IconComponent = iconComponents[name];
  if (!IconComponent) return null;

  return <IconComponent />;
};

export default Icons;

// <FiTruck />
// <LuCable />
// <MdSecurity />
// <RiWirelessChargingLine />
