import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Home.module.css'

interface IFormState {
	name: string
	email: string
}
function Home() {
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const { register, handleSubmit, reset} = useForm<IFormState>()

	const onSubmit: SubmitHandler<IFormState> = data => {
		console.log('data', data)
		if (data.email && data.name) {
			setIsSuccess(true)
			setTimeout(() => {
				setIsSuccess(false)
			}, 2000)
			reset()
		}
	}

	return (
		<div className={styles.wrapper}>
			
				{isSuccess ? (
					<div className={styles.success}>Форма жөнөтүлдү</div>
				) : (
					<form onSubmit={handleSubmit(onSubmit)}>
						<h1>GTA VI - Заявка калтырыңыз</h1>
						<input
							type='name'
							placeholder='Атыңызды жазыңыз...'
							{...register('name')}
						/>
						<input
							type='email'
							placeholder='Email жазыңыз...'
							{...register('email')}
						/>
						<button type='submit'>GTA VI каалайм!</button>
						</form>
				)}
			
		</div>
	)
}

export default Home
