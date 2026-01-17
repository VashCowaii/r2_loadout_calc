const configAbility = {
  "fileName": "Qingque_QingQue_Ability01_Part01",
  "childAbilityList": [
    "Qingque_Qingque_Ability01_Camera",
    "Qingque_QingQue_Ability01_Part01",
    "Qingque_QingQue_Ability01_Part02",
    "Qingque_Qingque_Eidolon4_ATK"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
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
      "ability": "QingQue_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}