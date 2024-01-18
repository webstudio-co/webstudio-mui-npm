import React from 'react'
import { Label } from 'components/ui'

type CellLabelProps = {
	value: string
}

const CellLabel: React.FC<CellLabelProps> = (props) => {
	const { value } = props
	return <Label label={value} />
}

export default CellLabel
