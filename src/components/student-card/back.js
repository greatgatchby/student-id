const Back = ({barcode}) => {
    return (
        <div className={'back'}>
            <h2>Lorum University</h2>
            <img src={barcode} alt={'student barcode'}/>
            <img style={{paddingTop: '10px'}} src={'data:image/jpeg;base64,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'} alt={'Lorum University Logo'}/>
        </div>
    )
}

export default Back;
