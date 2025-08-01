
const MailboxList = (props) => {
    return <>
        <h1>Mailboxes</h1>
        {props.mailboxes.length > 0 ? (
            <ul>
                {props.mailboxes.map((mailbox) => (
                        <li key="index">
                            <p>Owner: {mailbox.boxOwner}</p>
                            <p>Size: {mailbox.boxSize}</p>
                        </li>
                )
                )}
            </ul>
        ) : (
            <p>There are currently no mailboxes</p>
        )}
    </>
}
// Here I'll want to map through the mailbox array to display
// or display a message that says "There are currently no mailboxes"

export default MailboxList