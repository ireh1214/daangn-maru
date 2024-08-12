interface MiddleBoxProps {
	text1: string;
	text2: string;
	btnText: string;
}
export default function MiddleBox({ text1, text2, btnText }: MiddleBoxProps) {
	return (
		<div className="middle_box">
			<p>
				{text1}
				<br />
				{text2}
			</p>
			<button type="button">{btnText}</button>
		</div>
	);
}
