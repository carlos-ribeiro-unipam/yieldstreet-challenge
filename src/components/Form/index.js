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
import {
	Identity,
	Details,
	Favorites,
	Summary
} from '../Steps';
import './styles.scss';

const { Step } = Steps;

const steps = [
  {
    title: 'Identity',
    content: <Identity />,
		icon: <UserOutlined />,
  },
  {
    title: 'Details',
    content: <Details />,
		icon: <FieldNumberOutlined />
  },
  {
    title: 'Favorites',
    content: <Favorites />,
		icon: <StarOutlined />
  },
	{
    title: 'Summary',
    content: <Summary />,
		icon: <SolutionOutlined />,
  },
];

function Form() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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
					onClick={() => prev()}
				>
					Previous
				</Button>
        {current < steps.length - 1 && (
          <Button
						type="primary"
						onClick={() => next()}
					>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
						type="primary"
						onClick={() => message.success('Processing complete!')}
					>
            Done
          </Button>
        )}
      </div>
		</div>
	);
}

export default Form;
