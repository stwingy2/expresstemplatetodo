const layout = require('./layout');

const aboutPage = `
<div>ABOUT</div>
`;
module.exports = (date) => {
	return layout({ content: aboutPage }, date);
};
