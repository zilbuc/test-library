import React, { FC } from 'react'
import styles from './Component.module.scss'

export interface TestComponentProps {
	name: string
	age: number
}

export const TestComponent: FC<TestComponentProps> = ({ name, age }) => <div className={styles.testDiv}>My name is {name}, I'm {age} years young.</div>;
