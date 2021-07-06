import Form from './components/Form/index.js';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';

function App() {
	const storedFormData = useSelector(state => state.formData);
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 2000);

	return (
		<div>
			{isLoading
				? <LoadingOutlined
					style={{
						fontSize: '40px',
						width: '100%',
						textAlign: 'center',
						marginTop: '30px'
					}} />
				: !storedFormData.submited
					? <Form />
					: (<div
						id="survey-container"
						style={{
							width: '100%',
							textAlign: 'center',
							marginTop: '30px'
						}}
					>
						<h3>Survey has been submitted!</h3>
					</div>)
			}
		</div>
	);
}

export default App;
