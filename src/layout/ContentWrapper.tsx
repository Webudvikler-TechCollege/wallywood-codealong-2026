
export type ContentWrapperProps = {
    children?: React.ReactNode,
    pagetitle: string
}

export const ContentWrapper = ({ pagetitle, children }: ContentWrapperProps) => {
  return (
    <div>
      <title>{pagetitle}</title>
      <h1 className="page-heading">{pagetitle}</h1>
        {children}
    </div>
  )
}
