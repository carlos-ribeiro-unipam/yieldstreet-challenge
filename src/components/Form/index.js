import React, { useEffect, useState } from 'react';
import {
	Steps,
	Button
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
  const storedFormData = useSelector(state => state.formData);
  const [current, setCurrent] = useState(storedFormData.stepIndex);
  const [formData, setFormData] = useState(storedFormData);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const saveData = () => {
    const lastStepIndexInteraction = storedFormData.stepIndex > current ? storedFormData.stepIndex : current;

    dispatch(
      formDataUpdate({
        ...formData,
        stepIndex: lastStepIndexInteraction
      })
    );
  }

  const onChange = (value) => {
    setFormData(data => ({ ...data, ...value }));
  }

  const steps = [
    {
      title: 'Identity',
      content: <Identity
        data={storedFormData}
        onChange={onChange}
      />,
      icon: <UserOutlined />,
    },
    {
      title: 'Details',
      content: <Details
        data={storedFormData}
        onChange={onChange}
      />,
      icon: <FieldNumberOutlined />
    },
    {
      title: 'Favorites',
      content: <Favorites
        data={storedFormData}
        onChange={onChange}
      />,
      icon: <StarOutlined />
    },
    {
      title: 'Summary',
      content: <Summary
        data={storedFormData}
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

  const submit = () => {
    setCurrent(0);
    dispatch(formDataReset());
  }

  const isNotValidToNextStep = () => {
    if (current === 1 && (!formData.age || !formData.gender)) {
      return true;
    }

    if (current === 2 && (!formData.favoriteBook || !formData.favoriteColors.length)) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    setIsNextDisabled(isNotValidToNextStep());
  }, [formData, current]);

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
            disabled={isNextDisabled}
						type="primary"
						onClick={next}
					>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
						type="primary"
						onClick={submit}
					>
            Submit
          </Button>
        )}
      </div>
		</div>
	);
}

export default Form;
