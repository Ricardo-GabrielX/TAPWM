using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace PEmpregado
{
    abstract class Empregado
    {
        private int matricula;
        private string nomeEmpregado;
        private DateTime dataEntradaEmpresa;


        public Empregado() {
            System.Windows.Forms.MessageBox.Show("Aqui é empregado");
        }
        public int Matricula
        {
            get { return matricula; }
            set { matricula = value; }
        }

        public string NomeEmpregado
        {
            get { return nomeEmpregado; }
            set { nomeEmpregado = value; }
        }

        public DateTime DataEntradaEmpresa
        {
            get { return dataEntradaEmpresa; }
            set { dataEntradaEmpresa = value; }
        }

        public virtual int TempoTrabalho()
        {
            TimeSpan span =
                DateTime.Today.Subtract(dataEntradaEmpresa);
            return (span.Days);
        }

        public abstract double SalarioBruto();
    }
   
}
