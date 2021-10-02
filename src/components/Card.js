import { StyledCard } from './styles/StylesCard.styles'

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={(id % 2 === 0 && 'row-reverse') || 'row'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt='' />
      </div>
    </StyledCard>
  )
}
