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
    public partial class FrmMensalista: Form
    {
        public FrmMensalista()
        {
            InitializeComponent();
        }

        private void btnInstanciarMensalitsta_Click(object sender, EventArgs e)
        {
            Mensalista objMensalista = new Mensalista();

            objMensalista.NomeEmpregado = txtNome.Text;
            objMensalista.Matricula = Convert.ToInt32(matricula.Text);
            objMensalista.DataEntradaEmpresa = Convert.ToDateTime(txtData.Text);

            objMensalista.SalarioMensal = Convert.ToDouble(txtSalario.Text);

            MessageBox.Show("Nome=" + objMensalista.NomeEmpregado +
                "\n" + "Matrícula=" + objMensalista.Matricula +
                "\n" + "Tempo Trabalho= " + objMensalista.TempoTrabalho() +
                "\n" + "Salário Final= " + objMensalista.SalarioBruto().ToString("N2"));
        }

        private void txtData_TextChanged(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void txtSalario_TextChanged(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void txtNome_TextChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void matricula_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnInstanciarMensalistaParametros_Click(object sender, EventArgs e)
        {
            Mensalista objMensalista = new Mensalista();
                //Convert.ToInt16(txtData.Text);
            objMensalista.NomeEmpregado = txtNome.Text;
            objMensalista.Matricula = Convert.ToInt32(matricula.Text);
            objMensalista.DataEntradaEmpresa = Convert.ToDateTime(txtData.Text);

            objMensalista.SalarioMensal = Convert.ToDouble(txtSalario.Text);

            MessageBox.Show("Nome=" + objMensalista.NomeEmpregado +
               "\n" + "Matrícula=" + objMensalista.Matricula +
               "\n" + "Tempo Trabalho= " + objMensalista.TempoTrabalho() +
               "\n" + "Salário Final= " + objMensalista.SalarioBruto().ToString("N2"));

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void FrmMensalista_Load(object sender, EventArgs e)
        {

        }
    }
}
