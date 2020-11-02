import { NextRouter } from 'next/router';
import { Component } from 'react';
import HeroContainer from '../components/heroContainer';
import Navbar from '../components/navbar';

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeroContainer />			
		</div>
	);
}
