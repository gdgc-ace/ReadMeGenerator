import React from 'react'
import { useState ,useEffect} from 'react'
export const Database = (prop) => {

    const [CheckedList , setCheckedList]=useState([])
    const handleCheck=(e)=>{
        const id = e.target.id;
        const checked = e.target.checked;

        if(checked){
            setCheckedList([
                ...CheckedList , id
            ])
        }
        else{
            setCheckedList(CheckedList.filter((e)=>(e!==id)))
        }
    }
    useEffect(()=>{
        prop.getDatabaseData(CheckedList)
    })

  return (
    <div className="Database-div mt-2 mb-4 px-1_5">
    <div className="subtitle-div text-gray-900 py-1">Database</div>
    <div className='grid-pro-section'>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="mongodb" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="mysql" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="postgresql" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql"/>
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="redis" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="mariadb" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" alt="mariadb" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="cockroachdb" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://cdn.worldvectorlogo.com/logos/cockroachdb.svg" alt="cockroachdb" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="oracle" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="oracle" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="mssql" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" />
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="realm" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg" alt="realm"/>
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="cassandra" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg" alt="cassandra"/>
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="elasticsearch" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" alt="elasticsearch"/>
        </div>
        <div className='my-6 grid-pro-input'>
            <input type="checkbox" id="sqlite" className="checkbox-label__input"  onClick={handleCheck} /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite"/>
        </div>
    </div>
</div>
  )
}
