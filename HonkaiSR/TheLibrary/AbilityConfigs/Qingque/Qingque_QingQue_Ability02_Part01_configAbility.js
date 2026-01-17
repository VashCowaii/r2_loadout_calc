const configAbility = {
  "fileName": "Qingque_QingQue_Ability02_Part01",
  "childAbilityList": [
    "Qingque_Qingque_Ability02_Camera",
    "Qingque_QingQue_Ability02_Part01",
    "Qingque_QingQue_Ability02_Part02",
    "Qingque_Qingque_BpInsertAction",
    "Qingque_Qingque_BpInsertAction_Camera",
    "Qingque_Qingque_BpInsertAction_Tiao",
    "Qingque_Qingque_BpInsertAction_Tong",
    "Qingque_Qingque_BpInsertAction_Wan"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "QingQue_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}