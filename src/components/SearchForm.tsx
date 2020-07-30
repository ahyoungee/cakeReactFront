import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 400,
      },
    },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        width: 300,
      },
  }),
);

export default function ValidationTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off">
      <div>
          <div>
        <TextField
          id="contractor-name"
          label="契約者氏名"
        />
        <TextField
          id="company-name"
          label="会社名"
        />
        </div>
        <div>
        <TextField
          id="status"
          label="申し込みステータス"
        />
        <TextField
          id="service-category"
          label="サービスカテゴリ"
        />
        </div>
        <div>
        <TextField
          id="ad-method"
          label="流入経路"
        />
        <TextField
          id="application-date"
          label="申込日"
          type="date"
          InputLabelProps={{
            shrink: true,
        }}
        />
        <TextField
          id="start-use-date"
          label="利用開始日"
          type="date"
          InputLabelProps={{
              shrink: true,
          }}
        />
        </div>
      </div>
      <input type="submit" value="検索"></input>
    </form>
  );
}