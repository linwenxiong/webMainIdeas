# 多字段排序
``` sql
select * from bg_table  where `group` = 3 
ORDER BY 
sort DESC, -- 先排sort字段，从大到小开始排
id desc; -- 再排id字段，从大到小开始排
```

添加sort列的默认值
``` sql
ALTER TABLE bg_table ALTER COLUMN sort SET DEFAULT 0;

修改sort列类型为int
ALTER TABLE bg_table ALTER COLUMN sort TYPE INT;
``` 