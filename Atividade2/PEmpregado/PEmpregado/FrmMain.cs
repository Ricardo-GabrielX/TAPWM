using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace PEmpregado
{
    public partial class FrmMain: Form
    {
        public FrmMain()
        {
            InitializeComponent();
        }

        private void btnHorista_Click(object sender, EventArgs e)
        {
            FrmHorista instanciarHorista = new FrmHorista();
            instanciarHorista.Show();
        }

        private void btnMensalista_Click(object sender, EventArgs e)
        {
            FrmMensalista instanciarMensalista = new FrmMensalista();
            instanciarMensalista.Show();
        }
    }
}
