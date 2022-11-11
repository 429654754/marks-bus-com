// packages 目录复制到输出目录
import childProcess from 'child_process'

const copyDir = (src, dist) => {
  childProcess.spawn('cp', ['-r', , src, dist]);
};

copyDir('./packages', './docFiles');
