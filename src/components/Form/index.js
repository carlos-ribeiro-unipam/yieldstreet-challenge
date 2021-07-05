import React, { useState } from 'react';
import {
	Steps,
	Button,
	message
} from 'antd';
import {
	UserOutlined,
	FieldNumberOutlined,
	StarOutlined,
	SolutionOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { formDataUpdate, formDataReset } from '../../store/actions/formData';
import {
	Identity,
	Details,
	Favorites,
	Summary
} from '../Steps';
import './styles.scss';

const { Step } = Steps;

function Form() {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});
  const savedfFormData = useSelector(state => state.formData);

  const saveData = () => {
    dispatch(
      formDataUpdate({ ...formData })
    );
    console.log(formData)
  }

  const onChange = (value) => {
    setFormData(data => ({ ...data, ...value }));
  }

  const steps = [
    {
      title: 'Identity',
      content: <Identity
        data={savedfFormData}
        onChange={onChange}
      />,
      icon: <UserOutlined />,
    },
    {
      title: 'Details',
      content: <Details
        data={savedfFormData}
        onChange={onChange}
      />,
      icon: <FieldNumberOutlined />
    },
    {
      title: 'Favorites',
      content: <Favorites
        data={savedfFormData}
        onChange={onChange}
      />,
      icon: <StarOutlined />
    },
    {
      title: 'Summary',
      content: <Summary
        data={savedfFormData}
      />,
      icon: <SolutionOutlined />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
    saveData();
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const done = () => {
    message.success('Processing complete!');
    setCurrent(0);
    dispatch(formDataReset());
  }

  return (
		<div className="form-contaier">
      <Steps current={current}>
        {steps.map(item => (
          <Step
						key={item.title}
						title={item.title}
						icon={item.icon}
					/>
        ))}
      </Steps>
      <div className="steps-content">
				<div
          className={
            steps[current].title !== 'Summary'
            ? 'inner-content'
            : 'inner-content-full'
          }
        >
					{steps[current].content}
				</div>
			</div>
      <div className="steps-action">
				<Button
					disabled={current === 0}
					style={{ marginRight: '8px' }}
					onClick={prev}
				>
					Previous
				</Button>
        {current < steps.length - 1 && (
          <Button
						type="primary"
						onClick={next}
					>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
						type="primary"
						onClick={done}
					>
            Done
          </Button>
        )}
      </div>
		</div>
	);
}

export default Form;
