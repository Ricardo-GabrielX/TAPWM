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
    public partial class FrmHorista: Form
    {
        public FrmHorista()
        {
            InitializeComponent();
        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnInstanciarHorista_Click(object sender, EventArgs e)
        {
            Horista objHorista = new Horista();
            objHorista.Matricula = Convert.ToInt32(txtMatricula.Text);
            objHorista.NomeEmpregado = (txtNome.Text);
            objHorista.DataEntradaEmpresa = Convert.ToDateTime(txtData.Text);                                                    
            objHorista.DiasFalta = Convert.ToInt32(txtDiasFalta.Text);
            objHorista.NumeroHora = Convert.ToInt32(txtNumeroHora.Text);

            MessageBox.Show("Nome=" + objHorista.NomeEmpregado +
                "\n" + "Matrícula=" + objHorista.Matricula +
                "\n" + "Tempo Trabalho= " + objHorista.TempoTrabalho() +
                "\n" + "Data Entrada Empresa= " + objHorista.DataEntradaEmpresa.ToShortTimeString() +
                "\n" + "Salário hora= " + objHorista.SalarioHora +
                "\n" + "Número hora= " + objHorista.NumeroHora +
                "\n" + "Dias Falta= " + objHorista.DiasFalta +
                "\n" + "Salário Bruto= " + objHorista.SalarioBruto().ToString("N2") +
                "\n" + "Tempo Trabalho= " + objHorista.TempoTrabalho());

                

        }

        private void txtNumeroHora_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnInstanciarHoristaParametros_Click(object sender, EventArgs e)
        {
            Horista objMensalista = new Horista();
            //Convert.ToInt16(txtData.Text);
            objMensalista.NomeEmpregado = txtNome.Text;
            objMensalista.Matricula = Convert.ToInt32(txtMatricula.Text);
            objMensalista.DataEntradaEmpresa = Convert.ToDateTime(txtData.Text);

            objMensalista.SalarioHora = Convert.ToInt32(txtSalario.Text);

            MessageBox.Show("Nome=" + objMensalista.NomeEmpregado +
               "\n" + "Matrícula=" + objMensalista.Matricula +
               "\n" + "Tempo Trabalho= " + objMensalista.TempoTrabalho() +
               "\n" + "Salário Final= " + objMensalista.SalarioBruto().ToString("N2"));
        }
    }
}
