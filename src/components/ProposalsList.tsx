import * as React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField
} from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import {
  Alert,
  Button,
  Collapse,
  ListItemButton,
  ListItemSecondaryAction
} from '@mui/material';
import { Delete } from '@material-ui/icons';
import {proposalListProps} from "./pollTypes";

export default function ProposalsList(props: proposalListProps) {

  const [name, setName] = React.useState<string>("");
  const [alertOpen, setAlertOpen] = React.useState(false);


  const handleAdd = () => {

    if (props.proposals.length !== 0 && !(props.proposals.includes(name))) {
      setAlertOpen(false);
      props.setProposals([...props.proposals, name]);
      setName("");
    } else if (props.proposals.includes(name)) {
      setAlertOpen(true);
    } else {
      setAlertOpen(false);
      props.setProposals([name]);
      setName("");
    }
  };

  const handleRemove = (value: string) => {
    const newArray = props.proposals.filter((proposal: string) => {return proposal !== value});
    props.setProposals(newArray);
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }
  return (
    <div>
      <List>
        {props.proposals.map((value: string, index: React.Key | null | undefined) => {
          const labelId = `checkbox-list-label-${value}`;
          return (<>
            {props.proposals.length >= 1 && <ListItem
              key={index}
            >
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <Delete/>
                </IconButton>
              </ListItemSecondaryAction>
              <ListItemButton role={undefined} onClick={() => {handleRemove(value)}} dense>
                <ListItemText id={labelId} primary={`${value}`} />
              </ListItemButton>
            </ListItem>}
            </>
          );
        })}
        <Collapse in={alertOpen}>
          <Alert
            severity={"warning"}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlertOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Proposal already entered!
          </Alert>
        </Collapse>
        <TextField required id="standard-required" label={"Enter Proposal Name"} defaultValue="Add proposal" value={name} onKeyDown={handleKeyDown} onChange={e => setName(e.target.value)}/>
        <Button variant={"contained"} color={"primary"} onClick={handleAdd}>Add</Button>
      </List>

    </div>
  );
};