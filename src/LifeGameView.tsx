import { createSignal } from 'solid-js';
import LifeGame, { Grid } from './LifeGame';
import styles from './LifeGameView.module.css';

interface LifeGameViewProps {
  rows: number;
  columns: number;
  interval: number;
}

const LifeGameView = (props: LifeGameViewProps) => {
  const { rows, columns, interval } = props;
  const game = new LifeGame(rows, columns);
  const [cells, setCells] = createSignal<Grid>(game.initRandomly());
  const [paused, setPaused] = createSignal(false);

  let timer = 0;
  const start = () => {
    setPaused(false);
    timer = setInterval(() => {
      setCells(game.iterate());
    }, interval);
  };

  const pause = () => {
    setPaused(true);
    clearInterval(timer);
  };

  return (
    <>
      <div class={styles.controls}>
        <button onClick={start}>{paused() ? 'continue' : 'start'}</button>
        <button disabled={paused()} onClick={pause}>
          pause
        </button>
      </div>

      <table class={styles.gameGrid}>
        <tbody>
          {cells().map((rows) => {
            return (
              <tr>
                {rows.map((cell) => {
                  return (
                    <td class={cell.status === 1 ? styles.live : styles.dead} />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default LifeGameView;
