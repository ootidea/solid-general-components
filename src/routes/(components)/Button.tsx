import { Button } from '~/library/Button/Button'
import { PageTitle } from '~/page-parts/PageTitle'
import { PreviewArea } from '~/page-parts/PreviewArea'
import { SectionTitle } from '~/page-parts/SectionTitle'

export default function Page() {
  return (
    <>
      <PageTitle />
      <SectionTitle>Colors</SectionTitle>
      <PreviewArea>
        <Button>Primary</Button>
        <Button color="achromatic">Achromatic</Button>
        <Button color="error">Error</Button>
      </PreviewArea>

      <SectionTitle>Disabled</SectionTitle>
      <PreviewArea>
        <Button disabled>Primary</Button>
        <Button color="achromatic" disabled>
          Achromatic
        </Button>
        <Button color="error" disabled>
          Error
        </Button>
      </PreviewArea>
    </>
  )
}
