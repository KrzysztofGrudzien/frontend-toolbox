import React from 'react';
import Input from './Input';

export default { title: 'Input' };

export const Normal = () => <Input placeholder="Your name" />;
export const Search = () => <Input search placeholder="Search" />;
export const Small = () => <Input small placeholder="3" />;
export const Medium = () => <Input medium placeholder="Root fon size in px" />;
export const Large = () => <Input large placeholder="Pixels to convert, e.g. 10,12,14,32,40" />;
export const Select = () => <Input select placeholder="choose category" />;
