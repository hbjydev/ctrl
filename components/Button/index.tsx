import React from 'react';
import { Button as BC, Link } from './style';

const Button = ({ value, link }: { value: string; link?: string }) => (
  link ? <Link href={link}>{value}</Link> : <BC>{value}</BC>
);

export default Button;
