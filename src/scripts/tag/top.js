import { h } from 'preact';

export default ({ color }) => (
	<header id="title">{ color.replace('-', ' ') }</header>
);
