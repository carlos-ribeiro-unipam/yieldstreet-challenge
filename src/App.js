import Form from './components/Form/index.js';
import { useSelector } from 'react-redux';

function App() {
	const storedFormData = useSelector(state => state.formData);

	return (
		<div>
			{!storedFormData.done
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
